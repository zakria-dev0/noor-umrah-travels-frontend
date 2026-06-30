import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { apiFetch } from "../services/api";
import ContactModal from "../components/ContactModal";

interface Contact {
  _id: string;
  fullName: string;
  email: string;
  message: string;
  createdAt: string;
}

function formatDate(dateStr: string) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "2-digit",
  });
}

const Contacts = () => {
  const [contacts, setContacts]           = useState<Contact[]>([]);
  const [loading, setLoading]             = useState(true);
  const [page, setPage]                   = useState(1);
  const [pages, setPages]                 = useState(1);
  const [total, setTotal]                 = useState(0);
  const [search, setSearch]               = useState("");
  const [searchInput, setSearchInput]     = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => { loadContacts(); }, [page, search]);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const response = await apiFetch(
        `/api/admin/contacts?page=${page}&limit=10&search=${search}`
      );
      setContacts(response.data);
      setPages(response.pages);
      setTotal(response.total ?? response.data.length);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (contact: Contact) => {
    toast((t) => (
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Delete <strong>{contact.fullName}</strong>?</p>
        <div className="flex gap-2">
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await apiFetch(`/api/admin/contacts/${contact._id}`, { method: "DELETE" });
                toast.success("Contact deleted.");
                loadContacts();
              } catch {
                toast.error("Failed to delete contact.");
              }
            }}
            className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-md"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-200 text-gray-800 text-xs px-3 py-1.5 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    ), { duration: 8000 });
  };

  const handleSearch = () => {
    setPage(1);
    setSearch(searchInput);
  };

  return (
    <>
      <div className="space-y-4">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
            <p className="text-sm text-gray-400 mt-0.5">{total} total contacts</p>
          </div>
          <button
            onClick={loadContacts}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Search by name or email..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Search
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20 text-gray-400">
                <svg className="w-5 h-5 animate-spin mr-2 text-gray-900" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span className="text-sm">Loading contacts...</span>
              </div>
            ) : contacts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <svg className="w-10 h-10 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium text-gray-600">No contacts found</p>
                <p className="text-xs mt-1">Try a different search term</p>
              </div>
            ) : (
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Contact</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Email</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Message</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Date</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-gray-50 transition-colors">

                      {/* Contact */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                            {contact.fullName?.[0]?.toUpperCase() ?? "?"}
                          </div>
                          <p className="font-semibold text-gray-900 text-sm">{contact.fullName}</p>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {contact.email}
                      </td>

                      {/* Message preview */}
                      <td className="px-4 py-3" style={{ maxWidth: 220 }}>
                        <p className="text-sm text-gray-500 truncate">{contact.message}</p>
                      </td>

                      {/* Date */}
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {formatDate(contact.createdAt)}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="text-xs font-semibold bg-gray-700 hover:bg-gray-800 text-white px-3 py-1.5 rounded-md transition-colors"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(contact)}
                            className="text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1.5 rounded-md transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {!loading && contacts.length > 0 && (
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Page <span className="font-semibold text-gray-700">{page}</span> of <span className="font-semibold text-gray-700">{pages}</span>
              </span>
              <div className="flex gap-2">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-md bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <button
                  disabled={page === pages}
                  onClick={() => setPage(page + 1)}
                  className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-md bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      <ContactModal
        contact={selectedContact}
        onClose={() => setSelectedContact(null)}
      />
    </>
  );
};

export default Contacts;

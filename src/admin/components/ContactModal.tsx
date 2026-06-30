interface Contact {
  _id: string;
  fullName: string;
  email: string;
  message: string;
  createdAt: string;
}

interface Props {
  contact: Contact | null;
  onClose: () => void;
}

const ContactModal = ({
  contact,
  onClose,
}: Props) => {
  if (!contact) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="bg-white w-full max-w-lg h-full overflow-auto">
        <div className="p-6 border-b flex justify-between">
          <h2 className="font-bold text-xl">
            Contact Details
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <p className="text-gray-500">
              Name
            </p>
            <p>{contact.fullName}</p>
          </div>

          <div>
            <p className="text-gray-500">
              Email
            </p>
            <p>{contact.email}</p>
          </div>

          <div>
            <p className="text-gray-500">
              Message
            </p>
            <p>{contact.message}</p>
          </div>

          <div>
            <p className="text-gray-500">
              Created
            </p>
            <p>
              {new Date(
                contact.createdAt
              ).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
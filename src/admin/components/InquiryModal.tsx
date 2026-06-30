interface Inquiry {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  departureCity: string;
  travelMonth: string;
  departureDate: string;
  packageTier: string;
  roomType: string;
  status: string;
  createdAt: string;
}

interface Props {
  inquiry: Inquiry | null;
  onClose: () => void;
}

const InquiryModal = ({
  inquiry,
  onClose,
}: Props) => {
  if (!inquiry) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="w-full max-w-lg bg-white h-full overflow-y-auto shadow-xl">
        <div className="p-6 border-b flex justify-between">
          <h2 className="text-xl font-bold">
            Inquiry Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <Field
            label="Full Name"
            value={inquiry.fullName}
          />

          <Field
            label="Email"
            value={inquiry.email}
          />

          <Field
            label="Phone"
            value={inquiry.phone}
          />

          <Field
            label="Departure City"
            value={
              inquiry.departureCity
            }
          />

          <Field
            label="Travel Month"
            value={
              inquiry.travelMonth
            }
          />

          <Field
            label="Departure Date"
            value={
              inquiry.departureDate
            }
          />

          <Field
            label="Package"
            value={
              inquiry.packageTier
            }
          />

          <Field
            label="Room Type"
            value={inquiry.roomType}
          />

          <Field
            label="Status"
            value={inquiry.status}
          />

          <Field
            label="Created"
            value={new Date(
              inquiry.createdAt
            ).toLocaleString()}
          />
        </div>
      </div>
    </div>
  );
};

const Field = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div>
    <p className="text-sm text-gray-500">
      {label}
    </p>

    <p className="font-medium">
      {value}
    </p>
  </div>
);

export default InquiryModal;
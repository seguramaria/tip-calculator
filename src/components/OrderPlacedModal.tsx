type Props = {
  onClose: () => void;
};

const OrderPlacedModal = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 text-center">
        <h2 className="text-xl mb-4">Enjoy your food!</h2>
        <span role="img" aria-label="hamburger" className="text-4xl">
          🍔
        </span>
        <div className="mt-4">
          <button
            className="bg-[#F76D6A] text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPlacedModal;

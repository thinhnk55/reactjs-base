import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastifyDemo() {
  const { t } = useTranslation();

  // Toast functions for each button
  const showInfoToast = () => toast.info(t("toastify.messages.info"));
  const showSuccessToast = () => toast.success(t("toastify.messages.success"));
  const showErrorToast = () => toast.error(t("toastify.messages.error"));
  const showWarningToast = () => toast.warn(t("toastify.messages.warning"));

  return (
    <div className="bg-amber-100 w-96 rounded-sm shadow-sm p-4 flex flex-col items-center space-y-2">
      <button
        className="w-64 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={showInfoToast}
      >
        {t("toastify.button.info")}
      </button>
      <button
        className="w-64 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        onClick={showSuccessToast}
      >
        {t("toastify.button.success")}
      </button>
      <button
        className="w-64 px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        onClick={showErrorToast}
      >
        {t("toastify.button.error")}
      </button>
      <button
        className="w-64 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        onClick={showWarningToast}
      >
        {t("toastify.button.warning")}
      </button>

      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </div>
  );
}

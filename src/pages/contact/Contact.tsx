import * as motion from "motion/react-client";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleSnackbarClose = (
    _: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSnackbarMessage("Message sent successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setSnackbarMessage("Failed to send message");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full h-full flex flex-col items-center mt-10 pb-10 justify-start  2xl:max-w-360">
      <div className="relative">
        <p className="font-heading text-4xl lg:text-[96px] text-blue-50 uppercase">
          Contact
        </p>

        <motion.div
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          animate={{ rotate: 360 }}
          className="absolute -bottom-8 -left-12"
        >
          <StarRoundedIcon
            sx={{ width: 64, height: 64 }}
            className="text-blue-50"
          />
        </motion.div>
        <motion.div
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          animate={{ rotate: -360 }}
          className="absolute top-4 -right-8"
        >
          <StarRoundedIcon
            sx={{ width: 32, height: 32 }}
            className="text-blue-50"
          />
        </motion.div>
        <motion.div
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          animate={{ rotate: 360 }}
          className="absolute -top-8 -right-20"
        >
          <StarRoundedIcon
            sx={{ width: 72, height: 72 }}
            className="text-blue-50"
          />
        </motion.div>
      </div>

      <div className="mt-20 border border-blue-50 rounded-3xl p-6 w-full flex flex-col lg:flex-row gap-25">
        <div className="flex-1 flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-4">
            <p className="text-black-80 dark:text-off-white text-base font-bold">
              Telephone:
            </p>
            <p className="text-black-80 dark:text-off-white text-base font-light italic">
              +6693-031-8927
            </p>
          </div>
          <div className="flex gap-6 items-center mt-10 lg:mt-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.87 }}
              className="text-black-80 dark:text-off-white font-light hover:italic hover:border-b hover:border-blue-50 cursor-pointer"
            >
              LinkedIn
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.87 }}
              className="text-black-80 dark:text-off-white font-light hover:italic hover:border-b hover:border-blue-50 cursor-pointer"
            >
              Github
            </motion.button>
          </div>
        </div>

        <div className="flex lg:hidden w-full h-px bg-blue-50" />
        {/* form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex-1 flex flex-col gap-6"
        >
          <p className="text-base font-bold text-black-80 dark:text-off-white">
            Name (require)
          </p>
          <input
            type="text"
            name="name"
            required
            className="border-b border-blue-50 focus:outline-none text-black-80 dark:text-off-white"
          />
          <p className="text-base font-bold text-black-80 dark:text-off-white">
            Email (require)
          </p>
          <input
            type="email"
            name="email"
            required
            className="border-b border-blue-50 focus:outline-none text-black-80 dark:text-off-white"
          />
          <p className="text-base font-bold text-black-80 dark:text-off-white">
            Message
          </p>
          <textarea
            name="message"
            required
            className="w-full min-h-25 border-b border-blue-50 focus:outline-none text-black-80 dark:text-off-white"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.88 }}
            type="submit"
            disabled={loading}
            className="border border-blue-50 bg-blue-50 rounded-3xl px-6 py-2"
          >
            {loading ? "Sending..." : "Submit"}
          </motion.button>
        </form>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;

"use client";
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={modalVariants}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white p-4 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose}>Close Modal</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
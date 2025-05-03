// import React from 'react';
// import ReactDOM from 'react-dom';
// import { X } from 'lucide-react';

// type ModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
//   modalTitle?: string;
// };

// const Modal = ({ isOpen, onClose, children, modalTitle }: ModalProps) => {
//   if (!isOpen) return null;

//   const handleBackgroundClick = (e: React.MouseEvent) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const handleModalContentClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//   };

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div
//         className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//         onClick={handleBackgroundClick}
//       />

//       <div
//         className="relative z-10 w-full max-w-[600px] sm:max-w-[90vw] rounded-2xl bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText p-4 sm:p-6 shadow-xl transition-all duration-300"
//         onClick={handleModalContentClick}
//       >
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold">{modalTitle}</h2>
//           <button
//             onClick={onClose}
//             className="text-lightText dark:text-darkText hover:text-red-500 transition"
//             aria-label="Close modal"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div>{children}</div>
//       </div>
//     </div>,
//     document.getElementById('modal')!
//   );
// };

// export default Modal;

// const Modal = ({ isOpen, onClose, children, modalTitle }: ModalProps) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div
//         className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//         onClick={onClose}
//       />
//       <div className="relative z-10 w-[600px] max-w-[90vw] rounded-2xl bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText p-4 sm:p-6 shadow-xl transition-all duration-300">

//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold">{modalTitle}</h2>
//           <button
//             onClick={onClose}
//             className="text-lightText dark:text-darkText hover:text-red-500 transition"
//             aria-label="Close modal"
//           >
//             <X size={24} />
//           </button>
//         </div>
//         <div>{children}</div>
//       </div>
//     </div>,
//     document.getElementById('modal')!
//   );
//  };
// import React from 'react';
// import ReactDOM from 'react-dom';

// type ModalProps = {
//     isOpen:boolean,
//      onClose:()=>void,
//      children:React.ReactNode
// }

// const Modal = ({ isOpen, onClose, children }:ModalProps) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 z-50">
//       <div
//         className="fixed inset-0 bg-[hsla(0,0%,0%,0.7)]"
//         onClick={onClose}
//       />
//       <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90vw] rounded-2xl bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText p-4 sm:p-6">
//         {children}
//       </div>
//     </div>,
//     document.getElementById('modal')!
//   );
// };

// export default Modal;

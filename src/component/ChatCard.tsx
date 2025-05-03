// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import { ChatSectionProps } from "../ChatSection";
// import { IChatMessage } from "../VideoCallSection";
// import { MessageOptions } from "../ChatSection/MessageOptions";
// import { CheckCheck } from "lucide-react";

// export default function ChatCard({ messages }: ChatSectionProps) {
//   const [activeOptionsId, setActiveOptionsId] = useState<number | null>(null);

//   return (
//     <div className="space-y-6">
//       {messages.map((msg: IChatMessage) => {
//         const isUser = msg.sender === "user";

//         return (
//           <section
//             key={msg.id}
//             className={`relative group flex flex-col ${
//               isUser ? "items-end" : "items-start"
//             }`}
//             onMouseLeave={() => setActiveOptionsId(null)}
//           >

//             {msg.avatar && (
//               <section className="flex gap-3.5">
//               <img
//                 src={msg.avatar}
//                 alt={`${isUser ? "User" : "Doctor"} Avatar`}
//                 width={40}
//                 height={40}
//                 className="rounded-full object-cover mb-2"
//                 />
//                   <div className="flex justify-between items-center mb-1 text-sm gap-2">
//                   <span className="font-semibold">{isUser ? "You" : "Dr. Edward Thomas"}</span>
//                   <span className="text-xs text-gray-300">{msg.time}</span>
//                 </div>
//                 </section>
//             )}

//             <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
              
//               {isUser && msg.read && (
//                 <div className="w-5 h-5 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
//                   <CheckCheck className="w-3.5 h-3.5" />
//                 </div>
//               )}

//               <div
//                 className={`relative p-3 rounded-lg max-w-[80%] md:max-w-[70%] ${
//                   isUser ? "bg-digi-400 text-digi-500" : "bg-digi-600 text-digi-500"
//                 }`}
//               >


//                 <p>{msg.text}</p>

//                 <div
//                   className="absolute top-1 right-1 text-xl cursor-pointer hidden group-hover:block"
//                   onClick={() => setActiveOptionsId(prev => (prev === msg.id ? null : msg.id))}
//                 >
//                   ⋮
//                 </div>

//                 <AnimatePresence>
//                   {activeOptionsId === msg.id && (
//                     <div className={`absolute top-6 left-6/12 z-10`}>
//                       <MessageOptions onClose={() => setActiveOptionsId(null)} />
//                     </div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {!isUser && msg.read && (
//                 <div className="w-5 h-5 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
//                   <CheckCheck className="w-3.5 h-3.5" />
//                 </div>
//               )}
//             </div>
//           </section>
//         );
//       })}
//     </div>
//   );
// }

// import { ChatSectionProps } from "../ChatSection";
// import { IChatMessage } from "../VideoCallSection";

// export default function ChatCard({ messages }: ChatSectionProps) {
//   return (
//     <div className="space-y-6">
//       {messages.map((msg: IChatMessage) => {
//         const isUser = msg.sender === "user";

//         return (
//           <div
//             key={msg.id}
//             className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}
//           >
//             {!isUser && (
//               <img
//                 src={msg.avatar}
//                 alt="Doctor"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//             )}

//             <div
//               className={`p-3 rounded-lg max-w-[80%] md:max-w-[70%] ${
//                 isUser ? "bg-digi-400 text-digi-500" : "bg-digi-600 text-digi-500"
//               }`}
//             >
//               <p>{msg.text}</p>
//             </div>

//             {isUser && (
//               <img
//                 src={msg.avatar}
//                 alt="User"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

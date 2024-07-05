// import React from "react";

// export default function button() {
//   return (
//     <button className="px-8 py-4 rounded-xl border border-black text-lg">
//       Log in
//     </button>
//   );
// }

import React from "react";

export default function Button({ children, className }: any) {
  return (
    <button
      className={`px-10 py-4 rounded-xl border border-black text-lg font-normal ${className}`}
    >
      {children}
    </button>
  );
}

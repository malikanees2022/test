

// import { NextApiResponse, NextApiRequest } from 'next';
// import { serialize } from 'cookie';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     res.setHeader(
//       'Set-Cookie',
//       serialize('OurSiteJWT', '', {
//         expires: new Date(0),
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//         path: '/',
//       })
//     );

//     res.status(200).json({ message: 'Logout successful' });
//   } else {
//     console.log("some eroror is happing")
//     res.status(405).end(); // Method Not Allowed
//   }
// }




 import cookie from "cookie";
 export default (req, res) => {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("OurSiteJWT", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(200).json({ success: true });
  } else {
    console.log("error")
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method  Not is Allowed`);
  }
};
//  export default  (req,res)=>{
//   res.setHeader("Set-Cookie",
//     cookie.serialize("OurSiteJWT","",{
     
//               httpOnly: true,
//               secure: process.env.NODE_ENV === 'production',
//               expires: new Date(0),
//               sameSite: 'strict',
//               path: '/',

//     })
//   )
//   res.statusCode=200;
//   res.json({success:true})
//  }
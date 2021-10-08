import React from "react";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
  

export default function Index() {
  return (
    <div>
        <Footer
        columns={[
            {
                title: "Address",
                description:"Indian Institute of Information Technology Kottayam (IIIT Kottayam), Valavoor.P.O, Pala, Kottayam-686635, Kerala, India",
                url: ""
            },
            {
                title: "Website",
                url: "www.iiitkottayam.ac.in"
            },
            {

            }
        ]}
        bottom="© Copyright of IIIT Kottayam 2021"
        />
    </div>
  );
}

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export const ContactForm = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o3dp98i",
        "template_bqt3owm",
        form.current,
        "C-mcBd9rkRtbWb99j"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Email sent.");
  }

  return (
    <>
      <Typography sx={{ pb: 4 }}>
        Send us an email or you can call us.
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <Grid container item pb={3} xs={12}>
          <input
            className="form"
            type="text"
            name="user_name"
            placeholder="* Name"
            required
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid container item pb={3} xs={12}>
          <input
            className="form"
            type="email"
            name="user_email"
            placeholder="* Email"
            required
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid container item pb={3} xs={12}>
          <textarea
            className="form"
            name="message"
            placeholder="* Message"
            rows={10}
            required
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid container item xs={12} sx={{ pb: 2 }}>
          <Button
            className="form"
            sx={{ backgroundColor: "#5a5a5a" }}
            type="submit"
            value="Send"
            variant="contained"
          >
            Send
          </Button>
          <Button
            className="form"
            sx={{ backgroundColor: "#5a5a5a", marginLeft: "20px" }}
            type="submit"
            value="Send"
            variant="contained"
            href="tel:+4074892189"
          >
            Call
          </Button>
        </Grid>
      </form>
    </>
  );
};

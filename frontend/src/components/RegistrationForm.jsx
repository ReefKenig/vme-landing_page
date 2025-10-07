import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../styles/form.css";

export default function RegistrationForm({ referrer }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      const formData = { ...data, referrer };
      const response = await axios.post(
        "http://localhost:5000/api/submit",
        formData
      );
      console.log("Response:", response.data);
      navigate("/thank-you");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("שליחה נכשלה. אנא נסו שוב מאוחר יותר.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <h2>הירשמו לגרסת הבטא</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstname", { required: "שדה חובה" })}
          placeholder="שם פרטי"
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}

        <input
          {...register("lastname", { required: "שדה חובה" })}
          placeholder="שם משפחה"
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}

        <select {...register("sex", { required: "בחר אפשרות" })}>
          <option value="">מין</option>
          <option value="man">גבר</option>
          <option value="woman">אישה</option>
        </select>
        {errors.sex && <p>{errors.sex.message}</p>}

        <input
          {...register("age", {
            required: "שדה חובה",
            min: { value: 18, message: "השירות מיועד לבני 18 ומעלה" },
          })}
          placeholder="גיל"
          type="number"
        />
        {errors.age && <p>{errors.age.message}</p>}

        <input
          {...register("city", { required: "שדה חובה" })}
          placeholder="עיר"
        />
        {errors.city && <p>{errors.city.message}</p>}

        <input
          {...register("phone", { required: "שדה חובה" })}
          placeholder="טלפון"
          type="tel"
        />
        {errors.phone && <p>{errors.phone.message}</p>}

        <input
          {...register("email", {
            required: "שדה חובה",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "כתובת מייל לא חוקית",
            },
          })}
          placeholder='דוא"ל'
          type="email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label style={{ display: "block", marginTop: "1rem" }}>
          <input
            type="checkbox"
            {...register("consent", { required: "יש לאשר את התנאים" })}
          />{" "}
          אני מאשר/ת את מדיניות הפרטיות ותנאי השימוש
        </label>
        {errors.consent && <p>{errors.consent.message}</p>}

        <button type="submit" disabled={submitting}>
          רוצה להתקדם!
        </button>
      </form>
    </section>
  );
}

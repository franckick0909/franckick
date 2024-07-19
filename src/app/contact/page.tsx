"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedText } from "../components/animatedText";
import * as React from "react";
import { motion } from "framer-motion";

enum Validity {
  Neutral,
  Valid,
  Invalid,
}

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validity, setValidity] = useState({
    first_name: Validity.Neutral,
    last_name: Validity.Neutral,
    user_email: Validity.Neutral,
  });

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    let isValid = true;
    const newValidity = { ...validity };

    if (formData.first_name.length < 3) {
      newValidity.first_name = Validity.Invalid;
      isValid = false;
    } else {
      newValidity.first_name = Validity.Valid;
    }

    if (formData.last_name.length < 3) {
      newValidity.last_name = Validity.Invalid;
      isValid = false;
    } else {
      newValidity.last_name = Validity.Valid;
    }

    if (
      !formData.user_email.includes("@") ||
      formData.user_email === "" ||
      formData.user_email.length < 3 ||
      !formData.user_email.includes(".") ||
      formData.user_email.includes(" ")
    ) {
      newValidity.user_email = Validity.Invalid;
      isValid = false;
    } else {
      newValidity.user_email = Validity.Valid;
    }

    setValidity(newValidity);
    return isValid;
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      setError(true);
      setTimeout(() => setError(false), 5000);
      return;
    }

    if (!form.current) {
      setError(true);
      console.log("Form reference is null");
      setTimeout(() => setError(false), 5000);
      return;
    }

    emailjs
      .sendForm(
        "service_roc1q0g",
        "template_5rslfx1",
        form.current,
        "XgNJATb3Y7ca6KHnt"
      )
      .then((result: any) => {
        if (result.status === 200) {
          setSuccess(true);
          form.current?.reset();
          setFormData({
            first_name: "",
            last_name: "",
            user_email: "",
            user_subject: "",
            user_message: "",
          });
          setValidity({
            first_name: Validity.Neutral,
            last_name: Validity.Neutral,
            user_email: Validity.Neutral,
          });
          setTimeout(() => setSuccess(false), 5000);
          
        } else {
          setError(true);
          console.log(result.text);
          setTimeout(() => setError(false), 5000);
        }
      });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-14 bg-slate-950 dark:bg-white overflow-hidden">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-950  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-1 flex-col justify-center items-start space-y-4">
              <div className="space-y-1">
                <AnimatedText
                  stagger={0.05}
                  delay={0.8}
                  className="relative text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-950 dark:text-white uppercase"
                  text="Entrer en contact"
                />
                <p className="flex text-white md:text-xl">
                  Vous avez une question ou besoin d&apos;aide ? Remplissez le
                  formulaire et je vous répondrais dans les plus brefs délais.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-950 p-2 lg:p-4 xl:p-6 shadow-lg rounded-lg">
              <div className="flex flex-col gap-2 items-start justify-center mb-8">
                <h2 className="dark:text-white text-slate-950 text-xl font-semibold ">
                  Remplissez le formulaire ci-dessous pour me contacter.
                </h2>

                <p className="text-red-500 text-sm">
                  *
                  <span className="text-black dark:text-white text-xs">
                    {" "}
                    Champs obligatoires, ces informations sont nécessaires pour
                    procéder au traitement de votre demande.
                  </span>
                </p>
              </div>
              <div>
                <form className="grid gap-4" ref={form} onSubmit={sendEmail}>
                  <div className="w-full flex gap-2 md:flex-row flex-col">
                    <div className="w-full grid gap-2 ">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-4 text-gray-900 dark:text-white"
                      >
                        Prénom
                        <span className="text-red-500"> *</span>
                      </label>
                      <div className="grid gap-1">
                        <motion.input
                          initial={false}
                          animate={{
                            borderColor:
                              validity.first_name === Validity.Invalid
                                ? "border-red-500"
                                : validity.first_name === Validity.Valid
                                ? "border-green-500"
                                : "border-slate-950 dark:border-white/50",
                          }}
                          onBlur={(e) => {
                            const { value } = e.currentTarget;

                            if (!value) {
                              setValidity({
                                ...validity,
                                first_name: Validity.Neutral,
                              });
                            } else if (value.length < 3) {
                              setValidity({
                                ...validity,
                                first_name: Validity.Invalid,
                              });
                            } else {
                              setValidity({
                                ...validity,
                                first_name: Validity.Valid,
                              });
                            }
                          }}
                          value={formData.first_name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              first_name: e.target.value,
                            })
                          }
                          type="text"
                          name="first_name"
                          id="first-name"
                          placeholder="Entrer votre Prénom"
                          className={`block w-full border-b-[1px] ${
                            validity.first_name === Validity.Invalid
                              ? "border-red-500"
                              : validity.first_name === Validity.Valid
                              ? "border-green-500"
                              : "border-slate-950 dark:border-white/50"
                          } py-1.5 text-gray-900 dark:text-white outline-none  bg-transparent placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2 placeholder:`}
                        />
                        {formData.first_name === "" ||
                          (formData.first_name.length < 3 && (
                            <p className="text-red-500 text-xs">
                              Veuillez écrire un minimum de 3 lettres !
                            </p>
                          ))}
                      </div>
                    </div>

                    <div className="w-full grid gap-2 ">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-4 text-gray-900 dark:text-white"
                      >
                        Nom
                        <span className="text-red-500"> *</span>
                      </label>
                      <div className="grid gap-1">
                        <motion.input
                          initial={false}
                          animate={{
                            borderColor:
                              validity.last_name === Validity.Invalid
                                ? "border-red-500"
                                : validity.last_name === Validity.Valid
                                ? "border-green-500"
                                : "border-slate-950 dark:border-white/50",
                          }}
                          onBlur={(e) => {
                            const { value } = e.currentTarget;

                            if (!value) {
                              setValidity({
                                ...validity,
                                last_name: Validity.Neutral,
                              });
                            } else if (value.length < 3) {
                              setValidity({
                                ...validity,
                                last_name: Validity.Invalid,
                              });
                            } else {
                              setValidity({
                                ...validity,
                                last_name: Validity.Valid,
                              });
                            }
                          }}
                          value={formData.last_name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              last_name: e.target.value,
                            })
                          }
                          type="text"
                          name="last_name"
                          id="last-name"
                          placeholder="Entrer votre nom"
                          className={`block w-full border-b-[1px] ${
                            validity.last_name === Validity.Invalid
                              ? "border-red-500"
                              : validity.last_name === Validity.Valid
                              ? "border-green-500"
                              : "border-slate-950 dark:border-white/50"
                          } py-1.5 text-gray-900 dark:text-white outline-none  bg-transparent placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2 placeholder:`}
                        />
                        {formData.last_name === "" ||
                          (formData.last_name.length < 3 && (
                            <p className="text-red-500 text-xs">
                              Veuillez écrire un minimum de 3 lettres !
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-4 text-gray-900 dark:text-white"
                    >
                      Email
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      id="email"
                      value={formData.user_email}
                      onChange={(e) =>
                        setFormData({ ...formData, user_email: e.target.value })
                      }
                      type="email"
                      name="user_email"
                      placeholder="Entrer votre email"
                      className={`block w-full border-b-[1px] ${
                        validity.user_email === Validity.Invalid
                          ? "border-red-500"
                          : validity.user_email === Validity.Valid
                          ? "border-green-500"
                          : "border-slate-950 dark:border-white/50"
                      } py-1.5 text-gray-900 outline-none  bg-transparent placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2`}
                    />
                    {formData.user_email === "" ||
                      formData.user_email.length < 3 ||
                      (!formData.user_email.includes("@") && (
                        <p className="text-red-500 text-xs">
                          Veuillez entrer un mail valide
                        </p>
                      ))}
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium leading-4 text-gray-900 dark:text-white"
                    >
                      Sujet
                    </label>
                    <input
                      id="subject"
                      value={formData.user_subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          user_subject: e.target.value,
                        })
                      }
                      name="user_subject"
                      placeholder="Entrer un sujet"
                      className="block w-full border-b-[1px] border-slate-950 dark:border-white/50 py-1.5 text-gray-900 dark:text-white outline-none bg-transparent placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-4 text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.user_message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          user_message: e.target.value,
                        })
                      }
                      name="user_message"
                      placeholder="Entrer votre message"
                      className="min-h-[150px] block w-full rounded-md border-[1px] border-slate-950 dark:border-white/50 py-1.5 text-gray-900 dark:text-white placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2 bg-transparent outline-none"
                    />
                  </div>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    type="submit"
                    value="send"
                    className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition-all duration-300"
                  >
                    Envoyer
                  </motion.button>

                  {success && (
                    <p className="text-emerald-700 bg-green-100 p-2 rounded-md">
                      Message envoyé avec succès
                    </p>
                  )}
                  {error && (
                    <p className="text-red-700 bg-red-100 p-2 rounded-md">
                      Une erreur est survenue lors de l&apos;envoi du message
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
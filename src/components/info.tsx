export default function InfoSection() {
  return (
    <div className="bg-[#121212] w-full py-6 flex flex-col items-center justify-center text-center">
      {/* First Line */}
      <p className="text-white  font-extrabold text-lg sm:text-xl md:text-3xl mb-2">
        For more information
      </p>

     {/* Phone */}
<p className="text-white text-base  leading-16 sm:text-lg md:text-2xl">
  Call Us:{" "}
  <a
    href="tel:328492849"
    className="hover:underline hover:text-blue-400 transition-all duration-300"
  >
    328492849
  </a>
</p>

{/* Email */}
<p className="text-white text-base sm:text-lg md:text-3xl">
  Email Us:{" "}
  <a
    href="mailto:customercare@omodajaecoo.pk"
    className="hover:underline hover:text-blue-400 transition-all duration-300"
  >
    customercare@omodajaecoo.pk
  </a>
</p>

    </div>
  );
}
import callImage from "@/assets/call.jpg";
import messImage from "@/assets/mess.jpg";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://www.facebook.com/profile.php?id=100042873386786"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-2 border-white"
      >
        <img src={messImage} alt="Messenger" className="w-full h-full object-cover" />
      </a>
      <a
        href="tel:0944564078"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-2 border-white"
      >
        <img src={callImage} alt="Call 0944 564 078" className="w-full h-full object-cover" />
      </a>
    </div>
  );
};

export default FloatingContact;

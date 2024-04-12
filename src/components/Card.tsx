import { CardProps } from "@src/types/CardProps";

const Card = (props: object) => {
  const { avatar, first_name, last_name, email } = props as CardProps;
  return (
    <div className=" rounded overflow-hidden shadow-lg">
      <img className="w-full" src={avatar} alt={email} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {first_name} {last_name}
        </div>
        <p className="text-gray-700 text-base">{email}</p>
      </div>
    </div>
  );
};

export default Card;

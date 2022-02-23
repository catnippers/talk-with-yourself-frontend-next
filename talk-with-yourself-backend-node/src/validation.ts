import Joi from "joi";

export const validateRegister = (data: Request) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required().max(35),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

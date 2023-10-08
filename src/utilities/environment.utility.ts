import Joi from "joi";

export class EnvironmentManager {
  private static schema = Joi.object({
    VITE_API_URL: Joi.string().required(),
    VITE_EMAIL_ADDRESS: Joi.string().required(),
    VITE_YOUTUBE_CHANNEL: Joi.string().required(),
    VITE_STATIC_ASSETS_SERVER: Joi.string().required(),
  });

  public static async validate() {
    this.schema
      .validateAsync(import.meta.env, {
        abortEarly: false,
        allowUnknown: true,
      })
      .catch((err: unknown) => {
        if (err && err instanceof Joi.ValidationError) {
          console.log(err.details);
        }

        alert("Missing Environment Variables");
      });
  }
}

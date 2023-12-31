// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { CourseController } from "@/controllers/CourseController";
import formData from "@/helpers/formData";
import type { NextApiRequest, NextApiResponse } from "next";
import { uploadImage } from "../../../../helpers/fileUpload";
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: any = await formData(req);
  if (data.files.image) {
    const fileName = await uploadImage(data.files.image);
    data.fields.image = fileName;
  }

  const course = await CourseController.create(data.fields);
  res.status(200).send({
    success: true,
    msg: "Course created successfully",
    data: course,
  });
}

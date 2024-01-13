import multer from "multer";
import { Request } from "express";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: function (req:Request, file: Express.Multer.File, cb: DestinationCallback):void {
    //null is set as i dont want to handle errors here
    cb(null, "./public/temp");
  },
  filename: function (req:Request, file:Express.Multer.File, cb: FilenameCallback):void {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + "-" + uniqueSuffix+file.originalname);
  },
});

export const upload = multer({ storage: storage });

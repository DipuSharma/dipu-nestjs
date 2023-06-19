import * as path from "path"

require('dotenv').config()
// console.log("Port ",process.env.POSTGRES_PORT)

// const port = process.env.PORT

export const FILE_MIME_TYPE = {

    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  
    DOC: 'application/msword',
  
    PDF: 'application/pdf',
  
    XLS: 'application/vnd.ms-excel',
  
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  
    CSV: 'text/csv',
  
    JPEG: 'image/jpeg',
  
    JPG: 'image/jpeg',
  
    PNG: 'image/png',
  
    GIF: 'image/gif'
  
  }

  export const UPLOAD_DIR = {

    ROOT: path.join(__dirname,'uploads'),
  
    DESTINATION_DIR: 'uploads'
  
  }

  export const HOST_SERVER = {
    DB_HOST: process.env.POSTGRES_HOST,
    DB_PORT: process.env.POSTGRES_PORT,
    DB_USER_NAME: process.env.POSTGRES_USER,
    DB_PASSWORD: process.env.POSTGRES_PASSWORD,
    DB: process.env.POSTGRES_DB,
  }
import { container } from "../../inversify.config";
import { TYPES } from "../../types";
import Config from "../../providers/config/Config";
import fs from 'fs';

const conf = container.get<Config>(TYPES.Config);
const userP = conf.get("dbUser");

if ( !userP ) {
    throw new Error("Database user path not set in Configuration");
}
ensureFile(userP);

function ensureFile(filename: string) {
    fs.open(filename,'r',function(err, fd){
      if (err) {
        fs.writeFile(filename, '', function(err) {
            if(err) {
                if ( err.code == 'ENOENT' ) {
                    console.log("Database File Does not exists.")
                }
                else console.error(err);

            }
            console.log("Database File Created.");
        });
      } else {
        console.log("Database File already Exists");
      }
    });
}
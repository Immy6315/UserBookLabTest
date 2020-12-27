import * as bcrypt from 'bcrypt';
import HashProvider from './HashProvider';

class Bcrypt implements HashProvider {

    public async hash(plainString: string): Promise<string> {
        return await bcrypt.hash(plainString, 10);
    }    
    
    public async match(plainString: string, encryptedString: string): Promise<Boolean> {
        return bcrypt.compareSync(plainString, encryptedString);
    }

}

export default new Bcrypt()

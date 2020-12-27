export default interface HashProvider {
    /**
     * Hash a given String
     * @param plainString 
     */
    hash(plainString: string): Promise<string>

    /**
     * Validate a plain string with a hashed string
     * @param plainString The plain string to match
     * @param encryptedString The hased string to match with
     */
    match(plainString: string, encryptedString: string): Promise<Boolean>
}
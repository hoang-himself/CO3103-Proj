import { IsEmail, IsString, Matches, Min, MinLength } from "class-validator";

export class SignInCredentialDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password is too weak' })
    password: string;
    /*
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)  check regex for password:
    - Passwords will contain at least 1 upper case letter
    - Passwords will contain at least 1 lower case letter
    - Passwords will contain at least 1 number or special character
    - There is no length validation (min, max) in this regex!
    */
}
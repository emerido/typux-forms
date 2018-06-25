import {Email, Required} from "./rules";

class Profile
{

    @Required
    name : string;

    @Email
    @Required
    email : string;



    addresses : Address[];

}


class Address
{

    @Required
    house: string;

}
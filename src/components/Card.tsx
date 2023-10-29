import { ClaimTrial, TryFree } from "./Buttons"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorIcon from "../assets/images/icon-error"
import { useState } from "react"

export default function Card() {
    interface User {
        firstName: string;
        lastName: string;
        emailAddress: string;
        password: string;
    }

    const [ user, setUser ] = useState<User | null>(null)

    const userFormSchema = z.object({
        firstName: z.string().min(1, 'First Name cannot be empty'),
        lastName: z.string().min(1, 'Last Name cannot be empty'),
        emailAddress: z.string().min(1, 'Email cannot be empty').email('Looks like this is not an email').toLowerCase(),
        password: z.string().min(1, 'Password cannot be empty').min(8, 'Password must contain at least 8 characters'),
    })

    type userFormSchema = z.infer<typeof userFormSchema>

    const { 
        register, 
        handleSubmit, 
        formState:{ errors },
        } = useForm<userFormSchema>({
        resolver: zodResolver(userFormSchema)
    })

    const formatName = (name: string) => {
        if (name) {
            const words = name.toLowerCase().split(" ");
            const formattedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
            });
            return formattedWords.join(" ");
        }
        return name;
    };

    const modal = document.getElementById("modal")
    const card = document.getElementById("card")
    function createUser(data: userFormSchema) {
        const newUser: User = {
            firstName: formatName(data.firstName),
            lastName: formatName(data.lastName),
            emailAddress: data.emailAddress,
            password: data.password
        }
        if(card && modal) {
            card.classList.add("hidden")
            card.setAttribute("aria-hidden", "true")
            modal.classList.remove("hidden")
            modal.setAttribute("aria-hidden", "false")
        }
        setUser(newUser)
    } 
    const goBack = () => {
        if(card && modal) {
            card.classList.remove("hidden")
            card.setAttribute("aria-hidden", "false")
            modal.classList.add("hidden")
            modal.setAttribute("aria-hidden", "true")
        }
    }
   
 return (
        <div className="mt-10 md:mt-0 w-full lg:p-4">
            <div id="card">
                <TryFree></TryFree>
                <section className="w-full p-10 bg-white rounded-xl shadow-card-shadow sm">
                    <form id="form" onSubmit={handleSubmit(createUser)} className="">
                        <fieldset>
                            <legend className="sr-only">User form</legend>

                            <div className="relative">
                                <label htmlFor="firstName" className="sr-only">First Name</label>
                                <input
                                type="text"
                                placeholder="First Name"
                                id="firstName"
                                aria-describedby="firstNameError"
                                aria-invalid={errors.firstName ? "true" : "false"}
                                className={` border-1 rounded-md w-full p-4 placeholder:font-Poppins placeholder:text-Dark-Blue placeholder:font-medium placeholder:opacity-80 font-Poppins font-medium ${errors.firstName ? "border-Red placeholder:text-Red" : "border-gray-300"}`}
                                {...register('firstName')}/>
                                {errors.firstName && <div aria-hidden="true" className="absolute top-1/4 right-0 flex items-center pr-5 transform -translate-y-1 pointer-events-none">
                                    <ErrorIcon></ErrorIcon>
                                </div>}
                                <div className="flex justify-end">
                                    {errors.firstName && <span id="firstNameError" className="text-xs italic text-Red font-medium pt-1">{errors.firstName.message}</span>}
                                </div>
                            </div>

                            <div className="mt-4 relative">
                                <label htmlFor="lastName" className="sr-only">Last Name</label>
                                <input
                                type="text"
                                placeholder="Last Name"
                                id="lastName"
                                aria-describedby="lastNameError"
                                aria-invalid={errors.lastName ? "true" : "false"}
                                className={`border-1 rounded-md w-full p-4 placeholder:font-Poppins placeholder:text-Dark-Blue placeholder:font-medium placeholder:opacity-80 font-Poppins font-medium ${errors.lastName ? "border-Red placeholder:text-Red" : "border-gray-300"}`}
                                {...register("lastName")}/>
                                {errors.lastName && <div aria-hidden="true" className="absolute top-1/4 right-0 flex items-center pr-5 transform -translate-y-1 pointer-events-none">
                                    <ErrorIcon></ErrorIcon>
                                </div>}
                                <div className="flex justify-end">
                                    {errors.lastName && <span id="lastNameError" className="text-xs italic text-Red font-medium pt-1">{errors.lastName.message}</span>}
                                </div>
                            </div>

                            <div className="mt-4 relative">
                                <label htmlFor="emailAddress" className="sr-only">Email Address</label>
                                <input
                                type="email"
                                placeholder="Email Address"
                                id="emailAddress"
                                aria-describedby="emailAddressError"
                                aria-labelledby={errors.emailAddress ? "true" : "false"}
                                className={`border-1 rounded-md w-full p-4 placeholder:font-Poppins placeholder:text-Dark-Blue placeholder:font-medium placeholder:opacity-80 font-Poppins font-medium ${errors.emailAddress ? "border-Red placeholder:text-Red" : "border-gray-300"}`}
                                {...register("emailAddress")}/>
                                {errors.emailAddress && <div aria-hidden="true" className="absolute top-1/4 right-0 flex items-center pr-5 transform -translate-y-1 pointer-events-none">
                                    <ErrorIcon></ErrorIcon>
                                </div>}
                                <div className="flex justify-end">
                                    {errors.emailAddress && <span id="emailAddressError" className="text-xs italic text-Red font-medium pt-1">{errors.emailAddress.message}</span>}
                                </div>
                            </div>

                            <div className="mt-4 relative">
                                <label htmlFor="password" className="sr-only">Last Name</label>
                                <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                aria-describedby="passwordError"
                                aria-invalid={errors.password ? "true" : "false"}
                                className={`border-1 rounded-md w-full p-4 placeholder:font-Poppins placeholder:text-Dark-Blue placeholder:font-medium placeholder:opacity-80 font-Poppins font-medium ${errors.password ? "border-Red placeholder:text-Red" : "border-gray-300"}`}
                                {...register("password")}/>
                                {errors.password && <div aria-hidden="true" className="absolute top-1/4 right-0 flex items-center pr-5 transform -translate-y-1 pointer-events-none">
                                    <ErrorIcon></ErrorIcon>
                                </div>}
                                <div className="flex justify-end">
                                    {errors.password && <span id="passwordError" className="text-xs italic text-Red font-medium pt-1">{errors.password.message}</span>}
                                </div>
                            </div>

                            <ClaimTrial></ClaimTrial>
                        </fieldset>
                    </form>
                    <p id="footer" className="text-Grayish-Blue font-Poppins leading-6 text-center text-xs pt-4">
                        By clicking the button you are agreeing to our{' '}
                        <button type="button" aria-labelledby="terms">
                            <em id="terms" className="text-Red font-Poppins font-semibold not-italic opacity-100">
                                Terms and Services
                            </em>
                        </button>
                    </p>
                </section>
            </div>

            <div id="modal" aria-hidden="true" className="hidden">
                <div className="absolute top-0 left-0 min-h-screen w-full bg-black opacity-70 z-10"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs bg-white p-8 pt-4 z-20 rounded-xl">
                    <section className="font-Poppins space-y-2">
                        <h1 className="text-3xl text-center font-bold text-Dark-Blue">Welcome!</h1>
                        <ul className="pb-1">
                            <li className="font-Poppins text-medium text-Dark-Blue text-lg text-center">
                                <div className="mb-4">
                                    <div className="mb-1">
                                        <p>First Name:</p>
                                        <em style={{ overflowWrap: 'break-word'}} className="text-left font-Poppins text-medium text-red-500 not-italic">{user?.firstName}</em>
                                    </div>
                                    <hr />
                                </div>
                            </li>

                            <li className="font-Poppins text-medium text-Dark-Blue text-lg text-center">
                                <div className="mb-4">
                                    <div className="mb-1">
                                        <p>Last Name:</p>
                                        <em style={{ overflowWrap: 'break-word'}} className="text-left font-Poppins text-medium text-red-500 not-italic">{user?.lastName}</em>
                                    </div>
                                    <hr />
                                </div>
                            </li>
                            
                            <li className="font-Poppins text-medium text-Dark-Blue text-lg text-center">
                                <div className="mb-4">
                                    <div className="mb-1">
                                        <p>Email Address:</p>
                                        <em style={{ overflowWrap: 'break-word'}} className="text-left font-Poppins text-medium text-red-500 not-italic">{user?.emailAddress}</em>
                                    </div>
                                    <hr />
                                </div>
                            </li>
                            
                            
                            <li className="font-Poppins text-medium text-Dark-Blue text-lg text-center">
                                <div>
                                    <p>Password:</p>
                                    <em style={{ overflowWrap: 'break-word'}} className="text-left font-Poppins text-medium text-red-500 not-italic">{user?.password}</em>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <button onClick={goBack} type="button" className="w-full text-right text-purple-800">Something wrong?</button>
                        </div>

                        <div className="pt-4">
                            <button type="button" className="w-full p-4 bg-Green rounded-md shadow-claim-shadow hover:scale-y-110 hover:shadow-none transition font-Poppins text-white font-bold">Proceed</button>
                        </div>

                    </section>
                </div>
            </div>

        </div>
    )
}
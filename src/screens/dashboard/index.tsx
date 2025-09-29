import type { RootState } from "@/app/store";
import { Input } from "@/components/ui/input";
import { useLazyGetCurrentUserQuery } from "@/services/user";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Search, EllipsisVertical, LoaderCircle } from 'lucide-react';
import { useCreateContactMutation, useLazyGetContactsQuery } from "@/services/contact";
import type { CreateContactFormData, CreateContactRequestBody } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { CreateContactSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";



const Dashboard = () => {
    const [getCurrentUserTrigger, { data: currentUser, isLoading: currentUserLoading, error: currentUserError }] = useLazyGetCurrentUserQuery();
    const [getContactsTrigger, { data: contacts, isLoading: contactsLoading, error: contactsError }] = useLazyGetContactsQuery();

    const [createContact, { isLoading, error }] = useCreateContactMutation();

    const token = useSelector((state: RootState) => state.user.token);

    let letters = ''

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateContactFormData>({ resolver: zodResolver(CreateContactSchema) });

    useEffect(() => {
        if (token) {
            getCurrentUserTrigger();
            getContactsTrigger();
        }
    }, [token, getCurrentUserTrigger]);


    const handleCreateContact = async (data: CreateContactRequestBody) => {
        await createContact({
            name: data.name,
            email: data.email,
            phone: data.phone
        }).unwrap();

        getContactsTrigger();
    }


    if (currentUser?.user) {
        letters = currentUser.user.username
            .split(" ")
            .map(name => name[0])
            .join(" ")
            .toUpperCase();

    }

    return (
        <div className="space-y-5">
            {currentUserLoading && <p className="text-black">Loading...</p>}
            {currentUserError && <p>Error fetching user!</p>}
            <div className="flex items-center gap-x-2.5">
                <h3 className="bg-pink-300 rounded-full font-bold text-[25px] w-20 h-20 flex items-center justify-center">
                    {letters}
                </h3>
                <div className="flex flex-col items-start">
                    <p className="!text-xl">{currentUser?.user.username}</p>
                    <span>X contacts</span>
                </div>
                <div className="ml-auto bg-[#F0F0F0] rounded-full p-2.5">
                    <EllipsisVertical />
                </div>

            </div>
            <div>
                <Input className="!border-none rounded-2xl bg-[#F0F0F0]" placeholder="Search..." prefix={<Search />} />
            </div>
            <div>
                <h3>Create Contact</h3>

                <form action="" onSubmit={handleSubmit(handleCreateContact)}>
                    <div>
                        <Input {...(register("name"))} placeholder="User Name" />
                        <p className="text-red-500 text-xs h-1">
                            {errors.name ? errors.name.message : ""}
                        </p>
                    </div>
                    <div>
                        <Input {...(register("email"))} placeholder="E-mail" />
                        <p className="text-red-500 text-xs h-1">
                            {errors.email ? errors.email.message : ""}
                        </p>
                    </div>
                    <div>
                        <Input {...(register("phone"))} placeholder="Phone" />
                        <p className="text-red-500 text-xs h-1">
                            {errors.phone ? errors.phone.message : ""}
                        </p>
                    </div>

                    <Button type="submit">
                        {isLoading ? <LoaderCircle className="animate-spin" size={16} /> : 'CREATE'}
                    </Button>
                </form>


            </div>
            <div>
                {contacts?.user?.map((contact) => (
                    <p key={contact.id}>{contact.username}</p>
                ))}
            </div>
        </div>
    );
}

export default Dashboard
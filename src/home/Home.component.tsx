import React from "react";
import {useClients} from "../common/hook/Clients.hook";

export function HomeComponent() {
    const {data: clients} = useClients()

    return (
        <div>
            {
                clients?.map(client => (<p key={client.id}>{client.firstname}</p>))
            }
        </div>
    )
}

export type Appointments = {
    id: string,
    Date: string,
    Time: string
}
export type Clients = {
    id: string,
    FirstName: string,
    LastName: string,
    Location: string,
    Appointments: Appointments[]
}

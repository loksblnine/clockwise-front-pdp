export interface IOrder {
  masterId: number,
  customerId: number,
  customerName: string,
  cityId: number,
  workId: number,
  date: string,
  time: string,
  photo: string
}

export interface ICity {
  city_name: string,
  city_id: number
}

export interface IUser {
  id: number,
  email: string,
  role: number
}

export interface IType {
  work_id: number,
  price: string,
  time: string
}
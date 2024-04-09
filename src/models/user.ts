export interface User {
  id: string
  username: string
  email: string
  passwordHash: string
  isAdmin: boolean
  //   addresses: Address[]
  //   orders: Order[]
  //   reviews: Review[]
  //   cart?: Cart
  createdAt: Date
  updatedAt: Date
}

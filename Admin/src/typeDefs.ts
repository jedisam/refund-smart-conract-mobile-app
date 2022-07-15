export interface IEmployee {
    name: string,
    dob: string,
    gender: string,
    salary: number,
    _id?: string
  }
  
export interface IId {
    employeeId: string
}

export interface IId2 {
    id: string
  }
  
export interface IAction {
    type: string,
    payload: any
  }

export interface IEmpl {
    id: string,
    updatedEmployeeInfo: {
      name: string,
      dob: string,
      gender: string,
      salary: number,
    }
  }
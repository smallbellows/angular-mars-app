

interface IAlien {
    
    type: string,
    submitted_by: string,
    description: string,
    id: string
   
}
    
interface IOccupation {
    
   name: string,
   id: string,
   description: string
    
}

class Colonist {
   
   constructor (
        public name: string,
        public age: string,
        public job_id: string
    ) {}
    
}

class Encounter {
    
     constructor (
        public atype: string,
        public date: string,
        public action: string,
        public colonist_id: string
    ) {}
       
}


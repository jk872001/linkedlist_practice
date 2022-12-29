class List{
    constructor(data)
    {
        this.head={
            val:data,
            next:null
        }
        this.tail=this.head;
        this.size=1
    }

    appendNode(data)
    {
        
    }
}

const list=new List(100)
console.log(list);
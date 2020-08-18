class Books {
    constructor(data) {
        this.studID=data.studID
        this.studName=data.studName
        this.Title=data.Title
        this.Author=data.Author
        this.Year_Published=data.Year_Published
        this.borrowed=data.borrowed
        this.available=data.available
        this.duration=data.duration
        this.dues=data.dues
        this.dateBorrowed=data.dateBorrowed
        this. dateReturned=data.dateReturned

    }
    availabeBooks() {
       if(this.available ===true) {
        console.log("******A V A I L A B L E   B O O K S************")
        console.log(this.Title+" by "+this.Author)
    } else {
        this.borrowedBooks()
    }
}
    borrowedBooks() {
        
        this.borrowed=true
        console.log("\n******B O R R O W E D   B O O K S************")
        console.log(this.Title+" by "+ this.Author)
        this.setDateBorrowedAndReturned()
        //this.calculateDues
    }
    calculateDues() {
        let currentDate=new Date()
        if (this.dateReturned<currentDate) {
            this.dues=Math.abs(currentDate.getDay() - this.dateReturned.getDay()
            )*5
            console.log("\n----------Computation of Dues")
            console.log( "\nDues:" +this.dues)
        } else if (this.dateReturned.getDay() === currentDate.getDay()) {
            this.dues=0  
            console.log( "\nDues:" +this.dues)
            
        } else {
            console.log(this.Title + ' is still with the borrower: '+ this.studName )
        }
    }
    searchBookByTitle(Titles) {
        if(this.Title !==Titles) {
            console.log("Book Title: " + this.Title +" Not Found")
        } else {
            return this
        }
    }
    setDateBorrowedAndReturned() {
        console.log("\n**********Computing Date Returned\n")
       let dateBorrow=this.dateBorrowed
       let monthBorrow=dateBorrow.getMonth()
       let yearBorrow=dateBorrow.getYear()
       let dayBorrow=(dateBorrow.getDay()) +this.duration
       
       
        this.dateReturned =new Date(yearBorrow, monthBorrow, dayBorrow)
        
        console.log('Date Borrow: '+this.dateBorrowed)
        console.log('Date Returned: '+this.dateReturned )
        this.calculateDues()


    }
    
    }
    class BookLending extends Books {
        constructor(data) {
            super(data)
        } 
        LendingAndReturning() {
           this.availabeBooks();
           
        }               
    }

    let myBook=new BookLending ({
        Title: 'She stoops to conquer',
        Author: 'Williams Shakespears',
        Year_Published: 1889,
        studID :"1234",
        studName: "Yemisi A. A",
        available:false,
        borrowed:true,
        duration: 4,
        dateBorrowed: new Date()
       
    
    })
    let myBook2=new BookLending ({
        Title: 'Macbeth',
        Author: 'Williams Shakespears',
        Year_Published: 1899,
        studID :"9089",
        studName: "Yemisi A. A",
        available:true,
        borrowed:false,
        duration: 2,
        dateBorrowed: new Date()
       
    
    })

    
console.log(myBook.LendingAndReturning())
console.log(myBook2.LendingAndReturning())
    

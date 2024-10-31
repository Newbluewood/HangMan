 export class Vesala {
    constructor(rec){
        this.rec =rec
        this.pogodjeno = 0
        this.promaseno = 0
        this.prikaz = []
    }

    postavi(){
        for(let slova of this.rec){
           this.prikaz.push("")
        }
    }  

    imaLiSlovo(slovo){
      const odgovor = this.vratiPozicijeSlova(slovo)
      if (odgovor.length === 0){
        this.promaseno ++
        return false
      } else {
        return true
      }   
    }

    vratiPozicijeSlova(slovo){
        let n=0
        const pozicije =[]
        for (let slova of this.rec){
            n++
            if (slova === slovo){   
                pozicije.push(n)
                this.prikaz.splice(n-1,1,slovo)
                this.pogodjeno ++

            }       
        }
        return pozicije
    }

    brojSlovaUreci(){
        const duzina = this.rec.length
        return duzina
    }

    izabranaSlova(){
        return this.izbor
    }
    reseno(){
  
    }
}

const rec = "BABAROGA"

const igra1 = new Vesala(rec)
igra1.postavi()


const odgovor = igra1.imaLiSlovo('A')
const odgovor1 = igra1.imaLiSlovo('B')
const odgovor2 = igra1.imaLiSlovo('Z')
const odgovor3 = igra1.imaLiSlovo('E')



console.log("imaLiSlovo('A')",odgovor,"imaLiSlovo('B')",odgovor1,"imaLiSlovo('Z')",odgovor2,"imaLiSlovo('E')",odgovor3, ".prikaz:", igra1.prikaz,".pogodjeno:", igra1.pogodjeno,".promaseno: ",igra1.promaseno )
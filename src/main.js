import { TemplateLoader } from "./_helpers/template-loader"
import { PeopleService } from "./services/people-service";

class Main {
    //# privée
    #peoples = [
        'Robert Smith',
        'Billy Idol',
        'Nina Hagen',
        'Sid Vicious'
    ]
    #peoples1 = []
    /**
     * PeopleService
     */
    #service = null

    constructor() {
        this.#service = new PeopleService()
        this.#peoples1 = this.#service.peoples1
        this.#run()
    }

    get peoples(){
        return this.#peoples1
    }

    #run() {
        const title = document.querySelector('h1')
        title.innerText = 'CD Application'

        //add an element in the DOM
        const titleLevel2 = document.createElement('h2')
        titleLevel2.innerText = 'Titre niveau 2'

        //Hook the new DOM element to existing element
        document.body.appendChild(titleLevel2)

        const ul = document.createElement('ul')
        this.#peoples.forEach((people) => {
            const li = document.createElement('li')
            if (people !== 'Billy Idol') {
                li.innerText = people
            } else {
                li.innerHTML = `<strong>${people}</strong>`
            }

            ul.appendChild(li)
        })
        document.body.appendChild(ul)

        /*         const table = document.createElement('table')
                const thead = document.createElement('thead')
                const tr = document.createElement('tr')
                const th1 = document.createElement('th')
                th1.innerText = "First name"
                tr.appendChild(th1)
                const th2 = document.createElement('th')
                th2.innerText = "Last name"
                tr.appendChild(th2)
                const th3 = document.createElement('th')
                th3.innerText = "Band"
                tr.appendChild(th3)
                thead.appendChild(tr)
                table.appendChild(thead)
        
                const tbody = document.createElement('tbody')
                this.#peoples1.forEach((people) => {
                    const tr1 = document.createElement('tr')
        
                    const td1 = document.createElement('td')
                    td1.innerText = people.firstname
                    tr1.appendChild(td1)
        
                    const td2 = document.createElement('td')
                    td2.innerText = people.lastname
                    tr1.appendChild(td2)
        
                    const td3 = document.createElement('td')
                    td3.innerText = people.band
                    tr1.appendChild(td3)
        
                    tbody.appendChild(tr1)
                })
        
                table.appendChild(tbody)
                document.body.appendChild(table) */

        //
        const tbody = document.querySelector("tbody")
        for (const people of this.#peoples1) {
            //create a row for each people
            const tr = document.createElement('tr')

            //add a td for future checkbox using a static method
            tr.appendChild(Main.#makeCheckboxTd())
            //try to traverse the people abject
            for (const attribute in people) {
                const td = document.createElement('td')
                td.innerText = people[attribute]
                tr.appendChild(td)
            }

            //Append tr to tbody
            tbody.appendChild(tr)
        }
    }

    static #makeCheckboxTd() {
        const td = document.createElement('td')
        const templateLoader = new TemplateLoader('item-checkbox')
        try {
            const checkbox = templateLoader.loadTemplate()
            td.appendChild(checkbox)
        } catch (e) {
            td.innerHTML = '&nbsp;'
        }
        return td
    }
}

let app 
// Self callable function to run the Main class : 
//foction qui s'appelle toute seule
(function () {
    const app = new Main()
})()

//Event Listener for the main checkbox
document.getElementById('main-checkbox').addEventListener(
    'click', (event) => {
        const checkbox = event.target
        //Need to get all item-checkboxees
        const itemCheckboxes = document.getElementsByClassName('item-checkbox')
        let doCheck = false

        if (checkbox.checked) {
            doCheck = true
        }

        for (const itemCheckbox of itemCheckboxes) {
            itemCheckbox.checked = doCheck
        }

    }
)

const tbody = document.querySelector('tbody')
tbody.addEventListener(
    'click',
    (event) => {
        if (event.target.tagName === 'INPUT'){
            const checkbox = event.target
            //Ensure is the good checkbox
            if(checkbox.classList.contains('item-checkbox')){
                console.log('Hey i can do the job')
                console.log(app.peoples1.length)
                const mainCheckbox = document.getElementById('main-checkbox')
                if (checkbox.checked === false){
                    mainCheckbox.checked = false
                } else {
                    const itemCheckboxes = Array.from(document.getElementsByClassName('item-checkbox'))
                    const checkedItems = itemCheckboxes.filter((itemCheckbox) => itemCheckbox.checked)
                
                    mainCheckbox.checked = !(checkedItems.length - 
                        app.peoples1.length)
                }
            }
        }
    }
)

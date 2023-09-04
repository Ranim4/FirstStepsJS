class Main {
    #peoples1 = [
        {
            "lastname": "Smith",
            "firstname": "Robert",
            "band": "The cure"
        },
        {
            "lastname": "Idol",
            "firstname": "Billy",
            "band": "Generation X"
        },
        {
            "lastname": "Hagen",
            "firstname": "Nina",
            "band": "Nina Hagen"
        },
        {
            "lastname": "Idol",
            "firstname": "Sid",
            "band": " Sex Pistols"
        }
    ];
    //# privée
    #peoples = [
        'Robert Smith',
        'Billy Idol',
        'Nina Hagen',
        'Sid Vicious'
    ]

    constructor() {
        this.#run()
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

        const table = document.createElement('table')
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
        document.body.appendChild(table)
    }
}

// Self callable function to run the Main class : 
//foction qui s'appelle toute seule
(function () {
    const app = new Main()
})()
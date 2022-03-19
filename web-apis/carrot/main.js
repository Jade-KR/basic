const area = document.querySelector('.area');
const areaInfo = area.getBoundingClientRect();

const flagObj = document.querySelector('.background__top__flag');
const timerObj = document.querySelector('.background__top__timer');
const btn = document.querySelector('.control');
const carrots = document.querySelectorAll('.carrots');
const bugs = document.querySelectorAll('.bugs');

const minY = areaInfo.top;
const maxY = areaInfo.bottom;
const minX = areaInfo.left;
const maxX = areaInfo.right;

const alarm = document.querySelector('.alert');


const bgm = document.querySelector('.bgm')
const message = document.querySelector('.message')
const bugPull = document.querySelector('.bug_pull')
const carrotPull = document.querySelector('.carrot_pull')
const win = document.querySelector('.win')


const audioContext = new AudioContext();

const track = audioContext.createMediaElementSource(bgm);
// const track2 = audioContext.createMediaElementSource(message);
const track3 = audioContext.createMediaElementSource(bugPull);
const track4 = audioContext.createMediaElementSource(carrotPull);
const track5 = audioContext.createMediaElementSource(win);

track.connect(audioContext.destination);
// track2.connect(audioContext.destination);
track3.connect(audioContext.destination);
track4.connect(audioContext.destination);
track5.connect(audioContext.destination);


class Carrot_Game {
    flag;
    timer;
    interval;

    constructor() {
        this.reset();
        this.flag = 10;
        this.timer = 15;
        // message.play();
    }

    reset() {
        timerObj.innerHTML = "0:15";
        flagObj.innerHTML = "10";
        this.flag = 10;
        this.timer = 15;
        this.alert('start');
        alarm.classList.remove('hidden');
        carrots.forEach((carrot) => {
            if (carrot.className === 'carrots hidden') {
                carrot.classList.remove('hidden');
            }
        })
    }

    start_game() {
        this.reset();
        this.set_carrots();
        this.set_bugs();
        this.start_timer();
        alarm.classList.add('hidden');
        bgm.play();
    }

    over_game() {
        clearInterval(this.interval);
        alarm.classList.remove('hidden');
        this.alert('lose');
        bugPull.play();
        bgm.pause();
        // message.play();
    }

    set_carrots() {
        carrots.forEach((carrot) => {
            const posY = this.get_random_coordinate(minY, maxY);
            const posX = this.get_random_coordinate(minX, maxX);
            carrot.style.left = `${posX}px`;
            carrot.style.top = `${posY}px`;
            carrot.classList.remove('hidden');
        })
    }

    set_bugs() {
        bugs.forEach((bug) => {
            const posY = this.get_random_coordinate(minY, maxY);
            const posX = this.get_random_coordinate(minX, maxX);
            bug.style.left = `${posX}px`;
            bug.style.top = `${posY}px`;
            bug.classList.remove('hidden');
        })
    }

    get_carrot() {
        if (this.flag > 1) {
            this.flag -= 1;
            flagObj.innerHTML = this.flag;
            carrotPull.play();
        } else {
            carrotPull.play();
            this.flag -= 1;
            flagObj.innerHTML = this.flag;
            this.alert('win');
            alarm.classList.remove('hidden');
            bgm.pause();
            win.play();
            clearInterval(this.interval);
        }
    }

    get_random_coordinate(min, max) {
        return Math.random() * (max - min) + min;
    }

    start_timer() {
        this.interval = setInterval(() => {
            if (this.timer > 0) {
                this.timer -= 1;
                timerObj.innerHTML = `0:${this.timer}`
            } else {
                this.alert('lose');
                bgm.pause();
                alarm.classList.remove('hidden');
                clearInterval(this.interval);
            }
        }, 1000)
    }

    alert(type) {
        switch (type) {
            case 'lose':
                alarm.innerHTML = `
                <button class="control start"><i class="fas fa-undo"></i></button>
                    <div class="alert__message">You lose 💩</div>
                `
                break;
            case 'win':
                alarm.innerHTML = `
                <button class="control start"><i class="fas fa-undo"></i></button>
                    <div class="alert__message">You win 🎉</div>
                `
                break;
            case 'stop':
                alarm.innerHTML = `
                <button class="control replay"><i class="fas fa-undo"></i></button>
                    <div class="alert__message">Replay?</div>
                `
                break;
        
            default:
                alarm.innerHTML = `
                <button class="control start"><i class="fas fa-play"></i></button>
                    <div class="alert__message">Let's Start!</div>
                `
                break;
        }
    }
}

const game = new Carrot_Game();

alarm.addEventListener('click', (e) => {
    if (e.target.className === 'control start') {
        game.start_game();
    }
})

area.addEventListener('click', (e) => {
    if (e.target.className === 'carrots') {
        e.target.classList.add('hidden');
        game.get_carrot();
    } else if (e.target.className === 'bugs') {
        console.log('lose');
        game.over_game();
    }
})
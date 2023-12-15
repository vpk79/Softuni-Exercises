function songs(arr){

    class Song{

        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = arr.shift();
    let typeOfSongs = arr[arr.length-1];

    for(let i = 0; i < numberOfSongs; i++){
        let[type, name, time] = arr[i].split("_")
        let song = new Song(type, name, time)
        songs.push(song);
    }

    if(typeOfSongs === 'all'){
        songs.forEach((i) => console.log(i.name));
    } else{
        let filtered = songs.filter((i) => i.type === typeOfSongs);
        filtered.forEach((i) => console.log(i.name));
    }
}



songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])


songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
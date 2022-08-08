{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };
    function getVideo(id: string):Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data....'
        }
    }
    type videoMetaData = Omit<Video, 'url' | 'data' | 'hh'>
    function getVideoMetaData(id: string):videoMetaData {
        return {
            id,
            title: 'video',
        }
    }
}
{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };
    function getVideo1(id: string):Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data....'
        }
    }
    type videoMetaData = Pick<Video, 'id' | 'title'>
    function getVideoMetaData1(id: string):videoMetaData {
        return {
            id,
            title: 'video',
        }
    }
}
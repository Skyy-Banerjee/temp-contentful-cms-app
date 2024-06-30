import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: "y1axogncn48b",
    environment: "master",
    accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () =>{
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    async function getData(){
        try{
            const response = await client
            .getEntries({ content_type: 'contentfulCms' });
            const projects  = response.items.map((project)=>{
                const {title, url, image} = project.fields;
                const id = project.sys.id;
                const img = image?.fields?.file?.url;
                return {title, url, id, img};
            })
            setProjects(projects);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            console.log(accessToken);
            setLoading(false);
        }
    }

    useEffect(()=>{
      getData();
        
    },[]);

    return {loading,projects};
}

// client
// 	.getEntries({ content_type: 'contentfulCms' })
// 	.then((response) => console.log(response.items))
// 	.catch(console.error);
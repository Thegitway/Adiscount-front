const baseUrl="https://localhost:5000/api"

export async function getClient()
    {
        var rep=await fetch(baseUrl+"/client");
        var data= await rep.json();
        return data;
    }
    
    export async function getPic()
    {
        var rep=await fetch(baseUrl+"/picture");
        var data= await rep.json();
        return data;
    }

    export async function getPicId(id)
    {
        var rep=await fetch(baseUrl+`/picture/${id}`);
        var data= await rep.json();
        return data;
    }

    export async function getProduct()
    {
      var rep= await fetch(baseUrl+"/product")
      var data=rep.json()
      return data;
    }
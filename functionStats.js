
const stats = (arrayLinks) =>{

    total = {
        'Total': arrayLinks.length,
        'Unique': new Set(arrayLinks.map((link) => link.href)).size
    }

    return total

}


const statsValidate = (arrayLinks) =>{
    console.log(arrayLinks);
    const broken = arrayLinks.filter((link)=> link.status === 404).length;
    total ={
        'Total': arrayLinks.length,
        'Unique': new Set(arrayLinks.map((link) => link.href)).size,
        'Broken': broken
    }
    return total
}

module.exports = { stats, statsValidate }
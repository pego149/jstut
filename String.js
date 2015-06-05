/**
 *Kódovacia funkcia.
 * 
 *Funkcia bere anglickú abecedu - 26 písmen. Ostatné znaky nemení.
 *@param {string} sifra Parameter na vstupnú šifru.
 *@return {string}
 */
function rot13 (sifra)
{
	var sada1 = "ABCDEFGHIJKLM"
	var sada2 = "NOPQRSTUVWXYZ"
	var dlzka = sifra.length;
	var nova = "";
	
	for (var x = 0; x < dlzka; x++)
	{
		var test = 0;
		var o = sifra[x];
		for (var y = 0;y < 13; y++)
		{
			var p = sada1[y];
			if ( o == p)
			{
				var dobre = sada2[y];
				nova = nova + dobre;
				test++;
			}
		}
		
		for (var y = 0;y < 13; y++)
		{
			var p = sada2[y];
			if ( o == p)
			{
				var dobre = sada1[y];
				nova = nova + dobre;
				test++;
			}
		}
		if (test != 1)
		{
			nova = nova + o;
		}
	}
	return nova;
}

console.log(rot13("NUBW FIRG !!!"))
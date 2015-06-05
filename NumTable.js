/**
 * Generuje náhodné číslo.
 * 
 * Generuje náhodné číslo v rozmedzí max min.
 * @param {int} min Minimum
 * @param {int} max Maximum
 * @return {int}
 */
function nahodneCislo(min,max)
{
	var cislo;
	cislo=Math.floor(Math.random()*(max-min+1)+min);
	return cislo;
}

/**
 * Generuje pole.
 * 
 * Generuje multidimenzionálne pole s veľkosťami definovanými fo funkcii:velkostX,velkostY a nahodnými číslami podľa funkcie nahodneCislo.
 * @return {Array<Array<int>>}
 */
function generujPole()
{
	var velkostX=nahodneCislo(3,10);
	var velkostY=nahodneCislo(3,10);
 
	var pole=[];
	var cislo;
	for(var x=1;x<=velkostY;x++)
	{
		var poleNove=[];
		for(var y=1;y<=velkostX;y++)
		{
			cislo=nahodneCislo(1,800);
			poleNove.push(cislo);
		}
		pole.push(poleNove);     
	}
	return pole;
}

/**
 * Počíta šírky stĺpcov.
 * 
 * Funkcia prejde poľom a vypočíta šírky stĺpcov.
 * @param {Array<int>} pole Pole
 * @return {Array<int>}
 */
function sirkaStlpcov(pole)
{
	var m=pole.length;
	var nove=[];
	var o=0;
	for(var x=0;x<m;x++)
	{
		var n=pole[x];
		var q=n+'';
		var p=q.length;
		nove.push(p);
	}
	return nove;
}

/**
 * Počíta maximálnu dĺžku z Poľa.
 * 
 * Funkcia prejde poľom a vypočíta maximálnu dĺžku z Poľa. 
 * @param {Array<int>} pole Pole
 * @return {int}
 */
function MaxZPola(pole)
{
	var m=pole.length;
	var o=0;
	for(var x=0;x<m;x++)
	{
		var n=pole[x];
		var q=n+'';
		var p=q.length;
		if(p>o)
		{
			o=p;
		}
	}
	return o;
}

/**
 * Vykresľuje riadok.
 * 
 * Funkcia vykresľuje riadok podľa príslušných parametrov. 
 * @param {Array<int>} pole Pole
 * @param {int} max Šírka stĺpca
 * @param {int} riadok Číslo riadku
 */
function tlacRiadok(pole,max,riadok)
{
	p=pole.length;
	m=max.length;
	var z=pole[1].length;
	process.stdout.write("|");
	var n=riadok;
	var q=n+1+'';
	var dlzka=q.length;
	if(p<10)
	{
		process.stdout.write(" ");
		process.stdout.write(q);
		if(dlzka==2)
		{
   
		}
		else
		{
			var medzera=2-dlzka
			for(var t=0;t<medzera;t++)
			{
				process.stdout.write(" ");
			}
		}
	}
	else if(p>=10&&p<100)
	{
		process.stdout.write(" ");
		process.stdout.write(q);
		if(dlzka==3)
		{
		
		}
		else
		{
			var medzera=3-dlzka
			for(var t=0;t<medzera;t++)
			{
				process.stdout.write(" ");
			}
		}
	}
	else if(p>=100&&p<1000)
	{
		process.stdout.write(" ");
		process.stdout.write(q);
		if(dlzka==4)
		{
			
		}
		else
		{
			var medzera=4-dlzka
			for(var t=0;t<medzera;t++)
			{
				process.stdout.write(" ");
			}
		}
	}
	else
	{
		process.stdout.write(" ");
		process.stdout.write(q);
		if(dlzka==5)
		{
      
		}
		else
		{
			var medzera=5-dlzka
			for(var t=0;t<medzera;t++)
			{
				process.stdout.write(" ");
			}
		}
	}
	process.stdout.write("|");
	for(var y=0;y<z;y++)
	{
		var mx=max[y]
		var n=pole[riadok][y];
		var q=n+'';
		var dlzka=q.length;
    
		process.stdout.write(" ");
		if(dlzka==mx)
		{
			process.stdout.write(q);     
		}
		else
		{
			process.stdout.write(q);
			var medzera=mx-dlzka
			for(var t=0;t<medzera;t++)
			{
				process.stdout.write(" ");
			}
		}
		process.stdout.write(" ");
		process.stdout.write("|");
	}
}

/**
 * Vykresľuje prvý riadok.
 * 
 * Funkcia vykresľuje prvý riadok podľa príslušných parametrov. 
 * @param {Array<int>} pole Pole znakov pre riadok(vykresľuje)
 * @param {int} max Šírka stĺpca
 * @param {int} riadok Číslo riadku
 * @param {Array<int>} original Pole vstupujúce pre tabuľku
 * @param {int} max2 Šírka riadku pre súčty z riadkov
 */
function tlacPrvyRiadok(pole,max,riadok,original,max2)
{
	var p=original.length;
	var m=max.length
	var n=riadok;
	var q=n+'';
	var dlzka=q.length;
	process.stdout.write("|");
	if(p<10)
	{
		process.stdout.write("   ");
	}
	else if(p>=10&&p<100)
	{
		process.stdout.write("    ");
	}
	else if(p>=100&&p<1000)
	{
		process.stdout.write("     ");
	}
	else
	{
		process.stdout.write("      ");
	}
	process.stdout.write("|");
	for(var y=0;y<=m;y++)
	{
		var mx=max[y]
		var n=pole[y];
		var q=n+'';
		var dlzka=q.length;
		if(y==m)
		{
			process.stdout.write("|");
			q=" ";
			mx=max2;
		}
		process.stdout.write(" ");
		if(dlzka==mx)
		{
			process.stdout.write(q);     
		}
		else
		{
			process.stdout.write(q);
			var medzera=mx-dlzka
			for(var t=0;t<medzera;t++)
			{
				process.stdout.write(" ");
			}
		}
		process.stdout.write(" ");
		if(y==m)
		{
			console.log("|");
		}
		else
		{
			process.stdout.write("|");
		}
	}
}

/**
 * Vykresľuje čiaru.
 * 
 * Funkcia vykresľuje čiaru podľa príslušných parametrov. 
 * @param {Array<int>} pole Pole
 * @param {int} max Šírka stĺpca
 * @param {int} max2 Šírka riadku pre súčty z riadkov
 */
function tlacCiaru(pole,max,max2)
{
	var p=pole.length;
	var m=max.length;
  
	process.stdout.write("+");
	if(p<10)
	{
		process.stdout.write("---");
	}
	else if(p>=10&&p<100)
	{
		process.stdout.write("----");
	}
	else if(p>=100&&p<1000)
	{
		process.stdout.write("-----");
	}
	else
	{
		process.stdout.write("------");
	}
	for(var u=0;u<=m;u++)
	{
		var mx=max[u]
		process.stdout.write("+");
		if(u==m)
		{
			process.stdout.write("+");
			for(var t=-1;t<=max2;t++)
			{
				process.stdout.write("-");
			}
		}  
		else
		{
			for(var t=-1;t<=mx;t++)
			{
				process.stdout.write("-");
			}
		}
	}
	console.log("+");
}

/**
 * Vykresľuje posledný riadok so súčtami.
 * 
 * Funkcia vykresľuje posledný riadok so súčtami stĺpcov podľa príslušných parametrov. 
 * @param {Array<int>} pole Pole znakov pre riadok(vykresľuje)
 * @param {int} max Šírka stĺpca
 * @param {int} riadok Číslo riadku
 * @param {Array<int>} original Pole vstupujúce pre tabuľku
 */
function tlacSum(pole,max,riadok,original)
{
	var p=original.length;
	var m=max.length
	var n=riadok;
	var q=n+'';
	var dlzka=q.length;
	process.stdout.write("|");
	if(p<10)
	{
		process.stdout.write("   ");
	}
	else if(p>=10&&p<100)
	{
		process.stdout.write("    ");
	}
	else if(p>=100&&p<1000)
	{
		process.stdout.write("     ");
	}
	else
	{
		process.stdout.write("      ");
	}
	process.stdout.write("|");
	for(var y=0;y<m;y++)
	{
		var mx=max[y]
		var n=pole[y];
		var q=n+'';
		var dlzka=q.length;
    
		process.stdout.write(" ");
		if(dlzka==mx)
		{
			process.stdout.write(q);     
		}
		else
		{
			process.stdout.write(q);
			var medzera=mx-dlzka
			for(var t=0;t<medzera;t++)
			{
				process.stdout.write(" ");
			}
		}
		process.stdout.write(" ");
		process.stdout.write("|");
	}
}

/**
 * Vykresľuje bunku so súčtami.
 * 
 * Funkcia vykresľuje (poslednú) bunku so súčtami riadkov podľa príslušných parametrov. 
 * @param {int} sum Výsledok súčtu
 * @param {int} max2 Maximálna dĺžka
 */
function tlacVysledky(sum,max2)
{
	var mx=max2
	var n=sum;
	var q=n+'';
	var dlzka=q.length;
    
	process.stdout.write("| ");
	if(dlzka==mx)
	{
		process.stdout.write(q);     
	}
	else
	{
		process.stdout.write(q);
		var medzera=mx-dlzka
		for(var t=0;t<medzera;t++)
		{
			process.stdout.write(" ");
		}
	}
	console.log(" |")
}

/**
 * Sćítava stĺpce.
 * 
 * Funkcia sčítava stĺpce a výsledky vracia v poli. 
 * @param {Array<int>} pole Pole
 * @return {Array<int>}
 */
function scitavacStlpcov(pole)
{
	var m=pole.length;
	var z=pole[1].length;
	var no=[];
  
	for(var x=0;x<z;x++)
	{
		var q=0;
		for(var y=0;y<m;y++)
		{
			var n=pole[y][x];
			var q=n+q;
		}
		no.push(q);
	}
	return no;
}

/**
 * Sćítava riadky.
 * 
 * Funkcia sčítava čísla v riadkoch. 
 * @param {Array<int>} pole Pole znakov
 * @param {int} riadok Číslo riadku
 * @return {int}
 */
function scitavacRiadkov(pole,riadok)
{
	var m=pole.length;
	var z=pole[riadok].length;
	var q=0;
	for(var x=0;x<z;x++)
	{
		var n=pole[riadok][x];
		var q=n+q;
	}
	return q;
}

/**
 * Sćítava pole.
 * 
 * Funkcia sčítava čísla v celom poli. 
 * @param {Array<int>} pole Pole znakov
 * @return {int}
 */
function total(pole)
{
	var cislo=0;
	var dlzka1=pole.length;
	for(var x=0;x<dlzka1;x++)
	{
		var dlzka2=pole[1].length;
		for(var y=0;y<dlzka2;y++)
		{
			var c=pole[x][y];
			cislo=cislo+c
		}     
	}
	return cislo;
}

/**
 * Kreslí tabuľku.
 * 
 * Funkcia vykresľuje tabuľku podľa príslušného poľa. 
 * @param {Array<int>} pole Pole znakov
 */
function kresliTabulku(pole)
{
	var m=pole.length;
	var n;
	var p;
	var q;
	var pismena=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var z=pole[1].length;
	var sumy=scitavacStlpcov(pole);
	var sirkaStl=sirkaStlpcov(sumy);
	var e=[]
	for(var x=0;x<m;x++)
	{
		e.push(scitavacRiadkov(pole,x));
	}
	e.push(total(pole))
	var sirkaMax=MaxZPola(e);
  
	tlacCiaru(pole,sirkaStl,sirkaMax);
	tlacPrvyRiadok(pismena,sirkaStl,0,pole,sirkaMax);
	tlacCiaru(pole,sirkaStl,sirkaMax);
	for(var x=0;x<m;x++)
	{
		tlacRiadok(pole,sirkaStl,x);
		tlacVysledky(e[x],sirkaMax);
		tlacCiaru(pole,sirkaStl,sirkaMax);
	}
	tlacCiaru(pole,sirkaStl,sirkaMax);
	tlacSum(sumy,sirkaStl,0,pole);
	tlacVysledky(e[x],sirkaMax);
	tlacCiaru(pole,sirkaStl,sirkaMax);
}

kresliTabulku(generujPole())

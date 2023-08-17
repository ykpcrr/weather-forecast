import { useUser } from "../context/CityContext";

function Header() {
  const {setCity} = useUser();

  const handleCity = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
    
  };

  return (
    <div>
      <select
        onChange={(e) => {
          handleCity(e);
        }}
        id="ilDropdown"
      >
        <option value="istanbul">İstanbul</option>
        <option value="adana">Adana</option>
        <option value="adiyaman">Adıyaman</option>
        <option value="afyonkarahisar">Afyonkarahisar</option>
        <option value="agri">Ağrı</option>
        <option value="amasya">Amasya</option>
        <option value="ankara">Ankara</option>
        <option value="antalya">Antalya</option>
        <option value="artvin">Artvin</option>
        <option value="aydin">Aydın</option>
        <option value="balikesir">Balıkesir</option>
        <option value="bilecik">Bilecik</option>
        <option value="bingol">Bingöl</option>
        <option value="bitlis">Bitlis</option>
        <option value="bolu">Bolu</option>
        <option value="burdur">Burdur</option>
        <option value="bursa">Bursa</option>
        <option value="canakkale">Çanakkale</option>
        <option value="cankiri">Çankırı</option>
        <option value="corum">Çorum</option>
        <option value="denizli">Denizli</option>
        <option value="diyarbakir">Diyarbakır</option>
        <option value="edirne">Edirne</option>
        <option value="elazig">Elazığ</option>
        <option value="erzincan">Erzincan</option>
        <option value="erzurum">Erzurum</option>
        <option value="eskisehir">Eskişehir</option>
        <option value="gaziantep">Gaziantep</option>
        <option value="giresun">Giresun</option>
        <option value="gumushane">Gümüşhane</option>
        <option value="hakkari">Hakkâri</option>
        <option value="hatay">Hatay</option>
        <option value="isparta">Isparta</option>
        <option value="mersin">Mersin</option>
        <option value="izmir">İzmir</option>
        <option value="kars">Kars</option>
        <option value="kastamonu">Kastamonu</option>
        <option value="kayseri">Kayseri</option>
        <option value="kirklareli">Kırklareli</option>
        <option value="kirsehir">Kırşehir</option>
        <option value="kocaeli">Kocaeli</option>
        <option value="konya">Konya</option>
        <option value="kutahya">Kütahya</option>
        <option value="malatya">Malatya</option>
        <option value="manisa">Manisa</option>
        <option value="kahramanmaraş">Kahramanmaraş</option>
        <option value="mardin">Mardin</option>
        <option value="mugla">Muğla</option>
        <option value="mus">Muş</option>
        <option value="nevsehir">Nevşehir</option>
        <option value="nigde">Niğde</option>
        <option value="ordu">Ordu</option>
        <option value="rize">Rize</option>
        <option value="sakarya">Sakarya</option>
        <option value="samsun">Samsun</option>
        <option value="siirt">Siirt</option>
        <option value="sinop">Sinop</option>
        <option value="sivas">Sivas</option>
        <option value="tekirdag">Tekirdağ</option>
        <option value="tokat">Tokat</option>
        <option value="trabzon">Trabzon</option>
        <option value="tunceli">Tunceli</option>
        <option value="sanliurfa">Şanlıurfa</option>
        <option value="usak">Uşak</option>
        <option value="van">Van</option>
        <option value="yozgat">Yozgat</option>
        <option value="zonguldak">Zonguldak</option>
        <option value="aksaray">Aksaray</option>
        <option value="bayburt">Bayburt</option>
        <option value="karaman">Karaman</option>
        <option value="kirikkale">Kırıkkale</option>
        <option value="batman">Batman</option>
        <option value="sirnak">Şırnak</option>
        <option value="bartin">Bartın</option>
        <option value="ardahan">Ardahan</option>
        <option value="igdir">Iğdır</option>
        <option value="yalova">Yalova</option>
        <option value="karabuk">Karabük</option>
        <option value="kilis">Kilis</option>
        <option value="osmaniye">Osmaniye</option>
        <option value="duzce">Düzce</option>
      </select>
    </div>
  );
}

export default Header;

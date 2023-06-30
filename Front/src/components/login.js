import { useState } from 'react';

function PhoneNumberDropdown() {
  // 전화번호 국가 코드 목록
  const countryCodes = [
    { code: '+82', name: '대한민국' },
    { code: '+1', name: '미국' },
    { code: '+81', name: '일본' },
    // ... 더 많은 국가 코드
  ];

  // 선택한 국가 코드 상태값과 변경 함수
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);

  // 국가 코드 목록을 option 엘리먼트로 변환
  const countryCodeOptions = countryCodes.map((country) => (
    <option key={country.code} value={country.code}>
      {country.name} ({country.code})
    </option>
  ));

  return (
    <div>
      <label htmlFor="phone">휴대전화</label>
      <div>
        <select id="phone" value={selectedCountryCode} onChange={(e) => setSelectedCountryCode(e.target.value)}>
          {countryCodeOptions}
        </select>
        <input type="text" placeholder="전화번호를 입력해주세요" />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import { Card } from 'components/Form/Card';
import Button from 'components/Form/Button';

const CardStyles = `
margin: 0 auto 1rem auto;
width: 95vw;
position: relative;
transition: all 0.2s ease-in-out;
display: flex;
flex-direction: column;
a {
  color: ${colors.primary};
}
.controls {
  display: flex;
  flex-wrap: wrap;
  button {
    max-width: 300px;
  }
}
small {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.5;
}
`;

const StyledIframe = styled.iframe`
  width: calc(100% - 2rem);
  outline: none;
  border: none;
  border-radius: 4px;
  min-height: 50vh;
  height: 100%;
  margin: 1rem;
  background: ${colors.background};
`;

const ViewRaw = (props: { everything: { id: string, result: any}[] }) => {
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const makeResults = () => {
    const result: {[key: string]: any} = {};
    props.everything.forEach((item: {id: string, result: any}) => {
      result[item.id] = item.result;
    });
    return result;
  };

  const fetchResultsUrl = async () => {
    const resultContent = makeResults();
    const response = await fetch('https://jsonhero.io/api/create.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'web-check results',
        content: resultContent,
        readOnly: true,
        ttl: 3600,
      })
    });
    if (!response.ok) {
      setError(`HTTP error! status: ${response.status}`);
    } else {
      setError(null);
    }
    await response.json().then(
      (data) => setResultUrl(data.location)
    )
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(makeResults(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'web-check-results.json';
    link.click();
    URL.revokeObjectURL(url);
  }
  return (
    <Card heading="Ko'rish / Natijani yuklash" styles={CardStyles}>
      <div className="controls">
        <Button onClick={handleDownload}>Natijalarni yuklash</Button>
        <Button onClick={fetchResultsUrl}>{resultUrl ? 'Natijalarni o\'rnatish' : 'Natijalarni ko\'rish'}</Button>
        { resultUrl && <Button onClick={() => setResultUrl('') }>Natijalarni yashirish</Button> }
      </div>
      { resultUrl && !error &&
      <>
        <StyledIframe title="Results, via JSON Hero" src={resultUrl} />
        <small>Sizning natijalariz bu <a href={resultUrl}>yerda</a>.</small>
      </>
      }
      { error && <p className="error">{error}</p> }
      <small>
      Bular URL manzilingizdan va JSON formatida yaratilgan xom natijalardir.
         Qo'shimcha tahlil qilish uchun ularni o'z dasturingizga import qilishingiz mumkin.
      </small>
    </Card>
  );
};

export default ViewRaw;

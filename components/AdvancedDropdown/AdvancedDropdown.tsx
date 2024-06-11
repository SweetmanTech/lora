'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useProvider } from '@/providers/Provider';

const AdvancedDropdown = () => {
  const { tokenId, setTokenId, ethPrice, setEthPrice } = useProvider();
  const [showInputs, setShowInputs] = useState(false);

  return (
    <section className=" mx-auto">
      <div className="flex items-center justify-between">
        <Button size="sm" onClick={() => setShowInputs((prev) => !prev)}>
          <p className="text-black p-1">{showInputs ? 'Hide' : 'Show Advanced'}</p>
        </Button>
      </div>
      {showInputs && (
        <div className="flex flex-col gap-4">
          <Input
            type="number"
            placeholder="TokenID"
            value={tokenId}
            onChange={(e: any) => setTokenId(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Price (ETH)"
            value={ethPrice}
            onChange={(e: any) => setEthPrice(e.target.value)}
          />
        </div>
      )}
    </section>
  );
};

export default AdvancedDropdown;

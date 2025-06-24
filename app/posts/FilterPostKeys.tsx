"use client";

import { Badge } from "@/components/ui/badge";
import { usePostStore } from "@/lib/usePostStore";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

export default function FilterPostKeys() {
  const { setSearch } = usePostStore();

  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useMemo(() => Object.fromEntries(searchParams), [searchParams]);
  const urlParams = new URLSearchParams(searchParams.toString());

  const onDeletePostq = () => {
    urlParams.delete("postq");
    setSearch("");
    router.push(`?${urlParams.toString()}`);
  };

  const postq = params?.postq;

  return (
    <div>
      {/* {Object.keys(params).length ? ( */}
      {postq ? (
        <div className="flex items-center gap-1">
          <span className="text-sm">Result for :</span>
          {postq && (
            <button type="button" onClick={onDeletePostq}>
              <Badge className="badge">
                {postq}
                <span className="ml-1 text-red-500">x</span>
              </Badge>
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
